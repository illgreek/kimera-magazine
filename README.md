# Kimera Magazine - Avant-Garde Fashion Website

Сучасний модний журнал з авангардною естетикою, мінімалізмом та складними паралакс ефектами. Створений з Next.js, TypeScript, Tailwind CSS та Framer Motion.

## Особливості

- **Авангардний мінімалізм** з сміливою типографікою та експериментальними макетами
- **Паралакс прокрутка** з багатьма шарами та глибиною
- **Sticky scroll** елементи для покращення взаємодії з користувачем
- **Арт-хаус естетика** з високим контрастом та драматичною візуальною ієрархією
- **Адаптивний дизайн** оптимізований для всіх пристроїв
- **Плавні анімації** з використанням Framer Motion
- **Кастомні CSS ефекти** включаючи глітч анімації та розкриття тексту

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations (optional)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Homepage component
├── components/          # Reusable components
├── public/             # Static assets
└── package.json        # Dependencies and scripts
```

## Design Philosophy

The website embodies avant-garde minimalism with:
- High contrast black and white color scheme
- Bold, experimental typography
- Dramatic visual hierarchy
- Parallax scrolling effects
- Interactive animations
- Art-house aesthetic

## Секції

1. **Video/Photo Manifesto Section** - Повноекранний герой з паралакс фоном
2. **Text Manifesto Block** - "Екзистенціаліст" з драматичною типографікою
3. **Featured Product** - Поточний випуск з 3D ефектами
4. **Selected Content Preview** - Курований контент з hover анімаціями
5. **Magazine Team** - Профілі команди з паралакс фоном
6. **Contact Section** - Call-to-action з анімованими елементами

## Customization

- Modify colors in `tailwind.config.js`
- Add new animations in `globals.css`
- Update content in `page.tsx`
- Add new components in `components/` directory

## Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- CSS animations for smooth 60fps effects
- Responsive design for all devices

## License

MIT License - feel free to use this project for your own avant-garde magazine website. 