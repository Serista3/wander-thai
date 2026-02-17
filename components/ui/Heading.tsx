import { cn } from '@/lib/utils';

type HeadingProps = {
  level?: '1' | '2' | '3' | '4' | '5' | '6';
  className?: string;
  children: React.ReactNode;
};

const levelClasses = {
  1: 'text-3xl sm:text-4xl',
  2: 'text-2xl sm:text-3xl',
  3: 'text-xl',
  4: 'text-lg',
  5: 'text-base',
  6: 'text-sm',
};

export default function Heading({
  level = '1',
  className,
  children,
}: HeadingProps) {
  const HeadingEl = `h${level}` as React.ElementType;
  return (
    <HeadingEl
      className={cn(
        'font-semibold line-clamp-1 break-after-all',
        levelClasses[level],
        className
      )}
    >
      {children}
    </HeadingEl>
  );
}