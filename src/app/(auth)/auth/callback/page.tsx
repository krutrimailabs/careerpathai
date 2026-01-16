import { Loader2 } from "lucide-react";

export default function AuthCallbackPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
      <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      <h2 className="text-lg font-bold text-[#002147]">Verifying...</h2>
      <p className="text-sm text-zinc-500">Please wait while we log you in.</p>
    </div>
  );
}
