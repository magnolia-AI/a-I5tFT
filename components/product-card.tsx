import Image from 'next/image';
import { Product } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full">
      <CardHeader className="p-0 relative aspect-[4/3] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-semibold mb-1">{product.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-2 truncate">
          {product.description || 'An amazing hat for your collection.'}
        </CardDescription>
        <p className="text-xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

