import React from 'react'

interface LogoProps {
  className?: string
  height?: number
  width?: number
}

export function Logo({ className = "", height = 40, width = 180 }: LogoProps) {
  return (
    <img 
      src="/logo.png"
      alt="BrestCare Logo"
      width={width}
      height={height}
      className={`logo-container ${className}`}
      style={{
        objectFit: 'contain',
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        margin: '0',
        padding: '0',
        verticalAlign: 'top',
        lineHeight: '1',
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        boxShadow: 'none'
      }}
    />
  )
} 