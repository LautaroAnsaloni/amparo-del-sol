import { Toast, ToastActionElement, ToastProps } from "@/components/ui/toast"
import {
  useToast as useToastOriginal,
  type ToastOptions as ToastOptionsOriginal,
} from "@/components/ui/use-toast"

export type ToastOptions = ToastOptionsOriginal

export const useToast = useToastOriginal