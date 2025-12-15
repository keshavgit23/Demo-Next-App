interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset"; // optional, default "button"
}

export default function Button({ text, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      className="px-4 py-2 rounded-xl bg-black text-white mt-1 mb-2"
    >
      {text}
    </button>
  );
}