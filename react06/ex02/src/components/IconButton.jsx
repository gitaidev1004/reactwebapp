// IconButton.jsx
export default function IconButton({ icon, label }) {
  return (
    <button
      aria-label={label}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '8px 16px',
        background: '#ffc107',
        color: '#000',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer'
      }}
    >
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        style={{ width: 20, height: 20, marginRight: 6 }}
      />
      {label}
    </button>
  );
}