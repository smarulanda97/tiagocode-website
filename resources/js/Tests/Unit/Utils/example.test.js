import { expect, it } from 'vitest';
import { returnYourName } from '@/Utils/example.utils';

it('should return my name', () => {
    expect(returnYourName()).toEqual('Santiago');
});
