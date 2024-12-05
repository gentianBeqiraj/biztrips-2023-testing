import { render, screen } from '@testing-library/react';
import Wishlist from "../components/Wishlist";
import {testTrips} from "../components/api";

describe('Wishlist Component', () => {
    const mockRemoveFromWishlist = jest.fn();
    const mockClearWishlist = jest.fn();

    test('sollte Wishlist-Einträge korrekt darstellen', () => {
        render(
            <Wishlist
                wishlist={testTrips}
                removeFromWishlist={mockRemoveFromWishlist}
                clearWishlist={mockClearWishlist}
            />
        );

        const item1Heading = screen.getByRole('heading', { level: 6, name: 'BT01' })
        const item2Heading = screen.getByRole('heading', { level: 6, name: 'BT02' })
        const item3Heading = screen.getByRole('heading', { level: 6, name: 'BT03' })

        expect(item1Heading).toBeInTheDocument();
        expect(item2Heading).toBeInTheDocument();
        expect(item3Heading).toBeInTheDocument();
    });

    test('sollte „Wishlist is empty“ anzeigen, wenn keine Artikel in der Wishlist vorhanden sind', () => {
        render(
            <Wishlist
                wishlist={[]}
                removeFromWishlist={mockRemoveFromWishlist}
                clearWishlist={mockClearWishlist}
            />
        );

        expect(screen.getByText('Wishlist is empty')).toBeInTheDocument();
    });
});
