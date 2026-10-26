export default function Input({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...rest} className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-md focus:outline-none focus:border-white transition-colors text-white" />
  );
}