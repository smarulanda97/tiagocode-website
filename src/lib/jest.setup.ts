import '@testing-library/jest-dom';
import { jest, afterEach } from '@jest/globals';
import { cleanup } from '@testing-library/react';
import { IconsConfig } from '@/types';

afterEach(() => {
    cleanup();
});

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

jest.mock('@/helpers/icons', () => ({
    ...(jest.requireActual('@/helpers/icons') as object),
    getIcon: jest.fn<(name: string, config: IconsConfig) => null | string>(),
}));
