<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>R. Dayanidhi Memorial Vidyasala Matric School</title>

    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Your Custom CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<!-- ===== TOPBAR ===== -->
<div class="topbar">
    <div class="container">
        <div class="topbar-inner">
            <div class="topbar-left">
                <!-- Logo -->
                <a class="navbar-brand" href="index.php">
                    <img src="images/Logoimage.png" alt="RDMV School Logo" height="65">
                    <span class="school-name">
                        <span class="school-name-full">R. DAYANIDHI MEMORIAL EDUCATIONAL INSTITUTIONS</span>
                        <span class="school-name-short">R. DAYANIDHI SCHOOL <br>TRICHY</span>
                    </span>
                </a>
            </div>
            <div class="topbar-right">
                <span><i class="fas fa-phone"></i> +91 94427 50550</span>
                <span><i class="fas fa-envelope"></i> rdmvmatricschool@yahoo.in</span>
            </div>
        </div>
    </div>
</div>

<!-- ===== NAVBAR ===== -->
<nav class="navbar navbar-expand-lg sticky-top rdmvms-navbar">
    <div class="container">

        <!-- Mobile hamburger button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Nav Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">

                <!-- Home -->
                <li class="nav-item">
                    <a class="nav-link active" href="index.php">HOME</a>
                </li>

                <!-- About Us Dropdown -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" 
                       data-bs-toggle="dropdown">ABOUT US</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="about.php#founding">FOUNDING</a></li>
                        <li><a class="dropdown-item" href="about.php#vision">VISION & MOTTO</a></li>
                        <li><a class="dropdown-item" href="about.php#infrastructure">INFRASTRUCTURE</a></li>
                    </ul>
                </li>

                <!-- EC Skills Dropdown -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" 
                       data-bs-toggle="dropdown">EC SKILLS</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="ecskills.php#academic">ACADEMIC SKILLS</a></li>
                        <li><a class="dropdown-item" href="ecskills.php#language">LANGUAGE SKILLS</a></li>
                        <li><a class="dropdown-item" href="ecskills.php#physical">PHYSICAL SKILLS</a></li>
                    </ul>
                </li>

                <!-- Facilities Dropdown -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" 
                       data-bs-toggle="dropdown">FACILITIES</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="facilities.php#playzone">PLAY ZONE</a></li>
                        <li><a class="dropdown-item" href="facilities.php#classroom">CLASSROOM</a></li>
                        <li><a class="dropdown-item" href="facilities.php#labs">LABS</a></li>
                        <li><a class="dropdown-item" href="facilities.php#avroom">AV ROOM</a></li>
                        <li><a class="dropdown-item" href="facilities.php#transport">TRANSPORT</a></li>
                    </ul>
                </li>

                <!-- Gallery Dropdown -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" 
                       data-bs-toggle="dropdown">GALLERY</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="gallery.php#annual">ANNUAL DAY</a></li>
                        <li><a class="dropdown-item" href="gallery.php#sports">SPORTS DAY</a></li>
                        <li><a class="dropdown-item" href="gallery.php#events">EVENTS & EXHIBITIONS</a></li>
                    </ul>
                </li>

                <!-- Contact Us -->
                <li class="nav-item">
                    <a class="nav-link" href="contact.php">CONTACT US</a>
                </li>

            </ul>
        </div>
    </div>
</nav>