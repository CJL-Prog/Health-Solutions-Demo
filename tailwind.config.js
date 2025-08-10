/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'slideInLeft': 'slideInLeft 0.6s ease-out',
        'slideInRight': 'slideInRight 0.6s ease-out',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'gradient': 'gradientShift 3s ease infinite',
        'scaleIn': 'scaleIn 0.5s ease-out',
        'rotateIn': 'rotateIn 0.8s ease-out',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'gradient-text': 'gradientShift 3s ease infinite',
        'particle': 'particle-float 4s ease-in-out infinite',
        'spin-slow': 'spin 4s linear infinite',
        'typing': 'typing 3s steps(30, end), blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translate3d(0, 40px, 0)',
          },
          'to': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        slideInLeft: {
          'from': {
            opacity: '0',
            transform: 'translate3d(-100px, 0, 0)',
          },
          'to': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        slideInRight: {
          'from': {
            opacity: '0',
            transform: 'translate3d(100px, 0, 0)',
          },
          'to': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scaleIn: {
          'from': {
            opacity: '0',
            transform: 'scale(0.8)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        rotateIn: {
          'from': {
            opacity: '0',
            transform: 'rotate(-180deg) scale(0.5)',
          },
          'to': {
            opacity: '1',
            transform: 'rotate(0deg) scale(1)',
          },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
        'particle-float': {
          '0%, 100%': {
            transform: 'translate(0, 0) rotate(0deg)',
            opacity: '1',
          },
          '25%': {
            transform: 'translate(10px, -10px) rotate(90deg)',
            opacity: '0.8',
          },
          '50%': {
            transform: 'translate(-5px, -20px) rotate(180deg)',
            opacity: '0.6',
          },
          '75%': {
            transform: 'translate(-15px, -10px) rotate(270deg)',
            opacity: '0.8',
          },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#3b82f6' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
        'shimmer': 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
        'enhanced': '20px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.8)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'float': '0 25px 50px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-black': 'rgba(0, 0, 0, 0.1)',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Cal Sans', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        ...{
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        }
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          'background': 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)',
          'background-size': '300% 300%',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.glass-effect': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.hover-lift': {
          'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.hover-lift:hover': {
          'transform': 'translateY(-8px)',
          'box-shadow': '0 20px 40px rgba(0, 0, 0, 0.1)',
        },
        '.card-hover': {
          'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.card-hover:hover': {
          'transform': 'translateY(-4px) scale(1.02)',
          'box-shadow': '0 25px 50px rgba(0, 0, 0, 0.15)',
        },
        '.btn-primary': {
          'position': 'relative',
          'overflow': 'hidden',
          'transition': 'all 0.3s ease',
        },
        '.btn-primary::before': {
          'content': '""',
          'position': 'absolute',
          'top': '0',
          'left': '-100%',
          'width': '100%',
          'height': '100%',
          'background': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
          'transition': 'left 0.5s',
        },
        '.btn-primary:hover::before': {
          'left': '100%',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}