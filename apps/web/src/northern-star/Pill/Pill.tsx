export default function Pill({ label }: { label: string }) {
    return (
            <p className="bg-gray-300 rounded-2xl w-auto text-sm px-4">{label}</p>
    )
}