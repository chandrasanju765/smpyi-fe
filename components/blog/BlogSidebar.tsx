import { Blog } from "../../components/blog/type";

interface Props {
  blogs: Blog[];
}

const CATEGORIES_LIST = [
  { name: "Digital Marketing", icon: "📢", count: 22 },
  { name: "Technology",        icon: "💻", count: 18 },
  { name: "Business",          icon: "🏢", count: 16 },
  { name: "Home & Living",     icon: "🏠", count: 14 },
  { name: "Finance",           icon: "💰", count: 12 },
  { name: "Startups",          icon: "🚀", count: 10 },
];

export default function BlogSidebar({ blogs }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

      {/* ── Popular Posts ── */}
      <div style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid #F1F5F9",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}>
        <h3 style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          fontSize: "17px",
          color: "#0F172A",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}>
          ⚡ Popular Posts
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {blogs.slice(0, 5).map((b) => (
            <div key={b.id} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <img
                src={b.image}
                alt={b.title}
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <div>
                <p style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "13.5px",
                  fontWeight: 600,
                  color: "#0F172A",
                  lineHeight: 1.4,
                  margin: "0 0 4px",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>
                  {b.title}
                </p>
                <span style={{ fontSize: "12px", color: "#94A3B8" }}>{b.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Stay in the Loop ── */}
      <div style={{
        background: "#FFF7ED",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid #FED7AA",
      }}>
        {/* Top: phone icon area */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "16px",
        }}>
          <div style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "#FFEDD5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "36px",
          }}>
            🔔
          </div>
        </div>

        <h4 style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          fontSize: "16px",
          color: "#0F172A",
          textAlign: "center",
          marginBottom: "8px",
        }}>
          Stay in the Loop
        </h4>
        <p style={{
          fontSize: "13px",
          color: "#64748B",
          textAlign: "center",
          lineHeight: 1.6,
          marginBottom: "16px",
        }}>
          Subscribe to get the latest tips, deals, and updates straight to your inbox.
        </p>

        <input
          placeholder="Enter your email"
          style={{
            width: "100%",
            padding: "10px 14px",
            border: "1px solid #FED7AA",
            borderRadius: "8px",
            fontSize: "13px",
            fontFamily: "Poppins, sans-serif",
            outline: "none",
            marginBottom: "10px",
            boxSizing: "border-box",
            background: "#fff",
          }}
        />
        <button
          className="btn-primary"
          style={{
            width: "100%",
            padding: "11px",
            border: "none",
            borderRadius: "8px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </div>

      {/* ── Categories ── */}
      <div style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid #F1F5F9",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}>
        <h3 style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          fontSize: "17px",
          color: "#0F172A",
          marginBottom: "16px",
        }}>
          Categories
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {CATEGORIES_LIST.map((cat) => (
            <div
              key={cat.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#F8FAFC")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "16px" }}>{cat.icon}</span>
                <span style={{ fontSize: "14px", color: "#374151", fontFamily: "Poppins, sans-serif" }}>
                  {cat.name}
                </span>
              </div>
              <span style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#64748B",
                background: "#F1F5F9",
                padding: "2px 8px",
                borderRadius: "12px",
              }}>
                {cat.count}
              </span>
            </div>
          ))}
        </div>

        <button style={{
          marginTop: "12px",
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #E2E8F0",
          background: "transparent",
          fontFamily: "Poppins, sans-serif",
          fontSize: "13px",
          color: "#2563EB",
          fontWeight: 600,
          cursor: "pointer",
        }}>
          View All Categories →
        </button>
      </div>

    </div>
  );
}