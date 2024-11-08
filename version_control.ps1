# Verificar si el archivo version existe, si no, crearlo
if (-Not (Test-Path -Path "version")) {
    "0.0.0" > version
    Write-Output "Archivo de versión creado con la versión 0.0.0"
}

# Leer la versión actual
$current_version = Get-Content -Path "version"
$version_parts = $current_version -split '\.'

# Preguntar si es una actualización mayor
$is_major = Read-Host "¿Es una actualización mayor? (y/n)"

if ($is_major -eq "y") {
    # Incrementar la versión mayor
    $version_parts[0] = [int]$version_parts[0] + 1
    $version_parts[1] = 0
    $version_parts[2] = 0
} else {
    # Incrementar la versión menor
    $version_parts[2] = [int]$version_parts[2] + 1
}

# Nueva versión
$new_version = "$($version_parts[0]).$($version_parts[1]).$($version_parts[2])"
$new_version > version
Write-Output "Nueva versión: $new_version"

# Git add, commit y push
git add .

$commit_message = Read-Host "Introduce el mensaje del commit"
git commit -m "$commit_message"

$do_push = Read-Host "¿Quieres hacer push? (y/n)"
if ($do_push -eq "y") {
    git push
}