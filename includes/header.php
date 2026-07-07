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
<nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
        <!-- Mobile hamburger button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Nav Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">

                <!-- Home -->
                <li class="nav-item">
                    <a class="nav-link" href="index.php">Home</a>
                </li>

                <!-- About Us Dropdown -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">About Us</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="about.php#founding">Founding</a></li>
                        <li><a class="dropdown-item" href="about.php#vision">Vision & Motto</a></li>
                        <li><a class="dropdown-item" href="about.php#infrastructure">Infrastructure</a></li>
                    </ul>
                </li>

                <!-- EC Skills Dropdown -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">EC Skills</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="ecskills.php#academic">Academic Skills</a></li>
                        <li><a class="dropdown-item" href="ecskills.php#language">Language Skills</a></li>
                        <li><a class="dropdown-item" href="ecskills.php#physical">Physical Skills</a></li>
                    </ul>
                </li>

                <!-- Facilities Dropdown -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Facilities</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="facilities.php#playzone">Play Zone</a></li>
                        <li><a class="dropdown-item" href="facilities.php#classroom">Classroom</a></li>
                        <li><a class="dropdown-item" href="facilities.php#labs">Labs</a></li>
                        <li><a class="dropdown-item" href="facilities.php#avroom">AV Room</a></li>
                        <li><a class="dropdown-item" href="facilities.php#transport">Transport</a></li>
                    </ul>
                </li>

                <!-- Gallery Dropdown -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Gallery</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="gallery.php#annual">Annual Day</a></li>
                        <li><a class="dropdown-item" href="gallery.php#sports">Sports Day</a></li>
                        <li><a class="dropdown-item" href="gallery.php#events">Events & Exhibitions</a></li>
                    </ul>
                </li>

                <!-- Contact Us -->
                <li class="nav-item">
                    <a class="nav-link" href="contact.php">Contact Us</a>
                </li>

            </ul>
        </div>
    </div>
</nav>