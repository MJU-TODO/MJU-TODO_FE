interface SlideMenuBackDropProps {
  isOpen: boolean
  onClose: () => void
}

export default function SlideMenuBackDrop({
  isOpen,
  onClose,
}: SlideMenuBackDropProps) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      onClick={onClose}
    />
  )
}
