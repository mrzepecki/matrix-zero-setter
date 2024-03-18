# Matrix zero setter

## Opis
To repozytorium zawiera implementację algorytmu, który znajduje elementy zerowe w macierzy o wymiarach M x N i ustawia cały wiersz oraz kolumnę tego elementu na zero. Projekt uwzględnia również dobre praktyki związane z testami jednostkowymi.

### Jak używać?

1. Sklonuj to repozytorium na swój lokalny komputer.

    ```bash
    git clone <adres_repozytorium>
    ```

2. Zainstaluj z pomocą npm.

    ```bash
    npm install
    ```

### Skrypty

- **Testy jednostkowe:**

    ```bash
    npm run test
    ```

- **Uruchomienie w trybie deweloperskim:**

    ```bash
    npm run dev
    ```

### Algorytm

Algorytm znajduje się w pliku `utils/matrix.ts`. Działa on następująco: jeśli element macierzy ma wartość zero, ustawia cały wiersz i kolumnę tego elementu na zero.
