import { formattedCost, getImageUrl } from './../index';

describe('should test utility functions', () => {
  it('should test function, formattedCost', () => {
    expect(formattedCost(2000)).toBe('€ 20');
    expect(formattedCost(2000, '£')).toBe('£ 20');
    expect(formattedCost(2099)).toBe('€ 20.99');
  });

  it('should test function, getImageUrl', () => {
    expect(getImageUrl('image-hash')).toBe(
      '//cdn.aboutstatic.com/file/image-hash?quality=90&progressive=1&bg=f2f2f2&width=600&height=600&trim=1'
    );
    expect(getImageUrl('someotherhash')).toBe(
      '//cdn.aboutstatic.com/file/someotherhash?quality=90&progressive=1&bg=f2f2f2&width=600&height=600&trim=1'
    );
  });
});
