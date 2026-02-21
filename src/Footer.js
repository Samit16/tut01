const Footer = () => {
    const today=new Date();
    return (
        <footer style={{
            backgroundColor: 'lightblue',
            color: '# 333',
            padding: '10px',
            position: 'fixed',
            bottom: 0,
            width: '100%',
        }}>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer