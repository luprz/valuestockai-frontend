"use client"

interface DisclaimerProps {
  text: string;
}

export function Disclaimer({ text }: DisclaimerProps) {
  return (
    <p className="text-xs text-muted-foreground text-center max-w-2xl">
      {text}
    </p>
  );
}