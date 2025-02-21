'use client'
import { animate, useInView, useMotionValue } from "motion/react";
import { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number;
  direction?: "up" | "down";
  delay?: number; // delay in seconds
  duration?: number; // animation duration in seconds
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  duration = 1, // default duration of 1 second
  className,
  decimalPlaces = 0,
  prefix = "",
  suffix = "",
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Start at 0 or value based on the direction
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        // Use tween animation with the specified duration
        animate(motionValue, direction === "down" ? 0 : value, { duration });
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction, duration]);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          prefix +
          Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces))) +
          suffix;
      }
    });
    return () => unsubscribe();
  }, [motionValue, decimalPlaces, prefix, suffix]);

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block tabular-nums tracking-wider text-black dark:text-white",
        className
      )}
      {...props}
    >
      {prefix}
      {Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      }).format(0)}
      {suffix}
    </span>
  );
}
