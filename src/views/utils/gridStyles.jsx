const EDIT_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        
        viewBox="0 0 24 24"
        fill="none"
    >
        <path d="M13.0207 5.82839L15.8491 2.99996L20.7988 7.94971L17.9704 10.7781M13.0207 5.82839L3.41405 15.435C3.22652 15.6225 3.12116 15.8769 3.12116 16.1421V20.6776H7.65669C7.92191 20.6776 8.17626 20.5723 8.3638 20.3847L17.9704 10.7781M13.0207 5.82839L17.9704 10.7781"
            stroke="#5564eb"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
  );
  
const VIEW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        fill="#5564eb"
        viewBox="0 0 20 20"
    >
        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
    </svg>
);
  
  const styleButton = {
    buttonsCellContainer: {
      padding: "0 20px",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    editButton: {
      background: "#f3f3f3",
      outline: "none",
      cursor: "pointer",
      padding: 4,
      display: "inline-flex",
      border: "none",
      borderRadius: "50%",
      boxShadow: "1px 1px 2px 0px rgb(0 0 0 / .3)"
    },
    viewButton: {
      background: "#f3f3f3",
      outline: "none",
      cursor: "pointer",
      marginRight: 10,
      padding: 2,
      display: "inline-flex",
      border: "none",
      borderRadius: "50%",
      boxShadow: "1px 1px 2px 0px rgb(0 0 0 / .3)"
    }
  };


  const styles = {
    styleButton,
    EDIT_SVG,
    VIEW_SVG
  };
  
  export default styles;