import { useInView } from "@/hooks/use-in-view"

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  className?: string
  align?: "center" | "left"
}

export function SectionHeader({ badge, title, subtitle, className = "", align = "center" }: SectionHeaderProps) {
  const { ref, inView } = useInView()
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left"

  return (
    <div ref={ref} className={`max-w-2xl ${alignClass} mb-10 md:mb-14 ${className}`}>
      {badge && (
        <span className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          {badge}
        </span>
      )}
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ fontFamily: "'Playfair Display', serif", animationDelay: "0.1s" }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-muted-foreground text-sm md:text-base leading-relaxed ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
