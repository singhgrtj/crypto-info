export default function Button({ name, color, href }) { 
    return <button className="btn" 
                    style={{ backgroundColor: color}} 
                    href={href}>{name}
            </button>
}
