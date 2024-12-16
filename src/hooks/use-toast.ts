import {
  useToast as useToastOriginal,
  type actionTypes as ToastOptionsOriginal,
} from "@/components/ui/use-toast"

export type ToastOptions = typeof ToastOptionsOriginal

export const useToast = useToastOriginal
