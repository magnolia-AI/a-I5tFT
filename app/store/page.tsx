import { ProductCard } from '@/components/product-card';
import { mockHats } from '@/lib/mock-data';

export default function StorePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Our Hat Collection
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the perfect hat for any occasion. From classic styles to modern trends, we have something for everyone.
        </p>
      </header>

      {mockHats.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No hats available at the moment. Please check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockHats.map((hat) => (
            <ProductCard key={hat.id} product={hat} />
          ))}
        </div>
      )}
    </div>
  );
}

