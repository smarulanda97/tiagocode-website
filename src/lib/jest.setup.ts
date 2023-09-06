import '@testing-library/jest-dom';
import { jest, afterEach } from '@jest/globals';
import { cleanup } from '@testing-library/react';

afterEach(() => {
    cleanup();
});

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

jest.mock('@/helpers/icons', () => ({
    ...jest.requireActual('@/helpers/icons'),
    getIcon: jest.fn(),
}));
