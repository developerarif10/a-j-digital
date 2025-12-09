export default function SelectionLabel({ text, className = "" }) {
  return (
    <div className={`relative inline-flex mx-3 my-1 ${className}`}>
      {/* Selection Box */}
      <div className="absolute -inset-x-4 -inset-y-2 border border-primary pointer-events-none">
        {/* Corner Handles */}
        <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-white border border-primary" />
        <div className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-white border border-primary" />
        <div className="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-white border border-primary" />
        <div className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-white border border-primary" />
      </div>
      
      {/* Text */}
      <span className="text-sm font-bold uppercase tracking-widest">
        {text}
      </span>
    </div>
  )
}
