import Button from './Button';

export default function Subheader() {
    return (
        <div className="subheader">
            <Button name="GitHub" 
                    color="green" 
                    href="https://github.com/singhgrtj" 
            />
            <Button name="Linkedin" 
                    color="blue" 
                    href="https://www.linkedin.com/in/singh-gurtej-91233220a/" 
            />
        </div>
    )
}
