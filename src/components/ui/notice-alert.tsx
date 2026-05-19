import { useState } from "react"
import { TriangleAlert } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog"
import { Button } from "./button"

export function NoticeAlert() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md" showCloseButton={false}>
        <DialogHeader>
          <div className="flex items-center gap-2">
            <TriangleAlert className="size-5 text-amber-500" />
            <DialogTitle>Notice</DialogTitle>
          </div>
          <DialogDescription className="text-base pt-2">
            This portfolio is currently rewriting. May be out of date, please
            come back later.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">
          <Button variant="default" onClick={() => setOpen(false)}>
            Got it
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
