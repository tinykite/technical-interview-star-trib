export default function BreakingNews({ article }: any) {
  return (
    <section className="p-6 mb-10 rounded-lg shadow-lg" style={{ borderWidth: '4px', borderColor: '#dc2626', borderStyle: 'solid' }}>
      <div className="relative">
        <span className="absolute top-3 left-3 bg-red-600 text-white font-bold text-xs uppercase tracking-widest px-3 py-1 rounded">
          Breaking News
        </span>
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover rounded-md border-b-4 border-red-600"
          />
        )}
      </div>
      <h1 className="text-4xl font-extrabold mt-6 text-red-700 tracking-tight drop-shadow-md">
        {article.title}
      </h1>
      <p className="mt-4 text-lg text-gray-800 max-w-3xl leading-relaxed">
        {article.summary}
      </p>
    </section>
  );
}
