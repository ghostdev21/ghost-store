import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
    children: React.ReactNode,
    buttonName: string
    title: string
    description: string
}

export default function Modal({children, buttonName, description, title}: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger className="rounded-md">
          {buttonName}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div>
            {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
