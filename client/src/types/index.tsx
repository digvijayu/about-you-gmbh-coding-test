export interface Product {
  attributes: {
    new: Boolean;
    premium: Boolean;
    quantityPerPack: number;
    bigSize: Boolean;
    isSoldOut: Boolean;
    color: string;
  } | null;
  brand: {
    id: number;
    name: string;
  };
  categories: ProductCategory[];
  containingCategoryIds: number[];
  id: number;
  images: {
    imageBustFirst: ProductImage;
    imageModelFirst: ProductImage;
    imagesBustFirst: ProductImage[];
    imagesModelFirst: ProductImage[];
  };
  isSoldOut: Boolean;
  name: string;
  priceSummary: {
    isFromPrice: Boolean;
    withTax: number;
    referencePrice: {
      size: number;
      unit: string;
      withTax: number;
    };
    withoutTax: number;
  };
}

export interface ProductImage {
  brightness: number;
  focus: string;
  hash: string;
  priority: number;
  trim: Boolean;
  type: string;
  view: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  url: string;
}

export enum GridViewType {
  MODEL_VIEW,
  PRODUCT_VIEW
}

export enum GridSortType {
  HIGHEST_PRICE,
  LOWEST_PRICE
}
