export default function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-5 ${className}`}>
      <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-gold/50" />
      <div className="w-3 h-3 rotate-45 border-2 border-gold/50" />
      <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-gold/50" />
    </div>
  );
}
