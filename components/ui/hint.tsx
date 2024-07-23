import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

  interface HintProps {
    children: React.ReactNode,
    label: String,
    asChild: boolean,
    side: "top" | "bottom" | "right" | "left",
    align: "center" | "end" | "start" | undefined
  }

  export const Hint = ({children, label, asChild, side, align}: HintProps) => {
    return (
        <TooltipProvider>
             <Tooltip delayDuration={0}>
                <TooltipTrigger asChild={asChild}>
                  {children}
                </TooltipTrigger>
                <TooltipContent className="text-black bg-white" side={side} align={align}>
                  <p className="font-semibold">{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
  }
  