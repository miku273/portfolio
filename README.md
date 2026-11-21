# Portfolio - Thai Khac Bao

Portfolio cá nhân được xây dựng bằng React, TypeScript và Vite.

## Yêu cầu

- Node.js 22
- pnpm 10

## Cài đặt

```bash
pnpm install
```

## Chạy local

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

Kết quả production nằm trong thư mục `dist/`.

## Triển khai GitHub Pages

1. Tạo repository GitHub và đưa thư mục này lên nhánh `main`.
2. Trong **Settings → Pages**, đặt **Source** là **GitHub Actions**.
3. Push thay đổi lên nhánh `main`; workflow `.github/workflows/deploy-pages.yml` sẽ tự build và triển khai.

Dự án sử dụng đường dẫn tương đối nên có thể chạy dưới project URL dạng `https://<username>.github.io/<repository>/`.
