export interface Attributes {
  new: Boolean;
  premium: Boolean;
  quantityPerPack: Number;
  bigSize: Boolean;
  isSoldOut: Boolean;
  color: String;
}

export interface Product {
  id: Number;
  name: String;
  slug: String;
  parentId: Number;
  path: String;
  childrenIds: Number[];
  rootlineIds: Number[];
  parentIds: Number[];
  isHidden: Boolean;
  hasRedirectPath: Boolean;
  attributes: Attributes | null;
}
