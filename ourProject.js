function changeImage(project) {
    const projectImage = document.getElementById("projectImage");
    switch (project) {
        case 'project1':
            projectImage.src = "image1.jpeg";
            break;
        case 'project2':
            projectImage.src = "img2.jpeg";
            break;
        case 'project3':
            projectImage.src = "img3.jpeg";
            break;
        default:
            projectImage.src = "img3.jpeg";
            break;
    }
}
