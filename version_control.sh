#!/bin/bash

# Verificar si el archivo version existe, si no, crearlo
if [ ! -f version ]; then
    echo "0.0.0" > version
    echo "Archivo de versión creado con la versión 0.0.0"
fi

# Leer la versión actual
current_version=$(cat version)
IFS='.' read -r -a version_parts <<< "$current_version"

# Preguntar si es una actualización mayor
read -p "¿Es una actualización mayor? (y/n): " is_major

if [ "$is_major" == "y" ]; then
    # Incrementar la versión mayor
    version_parts[0]=$((version_parts[0] + 1))
    version_parts[1]=0
    version_parts[2]=0
else
    # Incrementar la versión menor
    version_parts[2]=$((version_parts[2] + 1))
fi

# Nueva versión
new_version="${version_parts[0]}.${version_parts[1]}.${version_parts[2]}"
echo $new_version > version
echo "Nueva versión: $new_version"

# Git add, commit y push
git add .

read -p "Introduce el mensaje del commit: " commit_message
git commit -m "$commit_message"

read -p "¿Quieres hacer push? (y/n): " do_push
if [ "$do_push" == "y" ]; then
    git push
fi
