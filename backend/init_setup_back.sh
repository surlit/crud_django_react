#!/bin/bash

# Nombre del entorno virtual
ENV_DIR="env"

# Detectar el comando de Python
PYTHON_CMD=$(command -v python3 || command -v python)

# Verificar si el comando de Python fue encontrado
if [ -z "$PYTHON_CMD" ]; then
    echo "Error: Python no está instalado."
    exit 1
fi

# Verificar si el entorno virtual ya existe
if [ -d "$ENV_DIR" ]; then
    echo "El entorno virtual ya existe. Activándolo..."
else
    # Crear entorno virtual
    echo "Creando un nuevo entorno virtual..."
    $PYTHON_CMD -m venv "$ENV_DIR"
fi

# Levantar entorno virtual
source "$ENV_DIR/bin/activate"

# Instalar Django si no está instalado
if ! $PYTHON_CMD -c "import django" &> /dev/null; then
    echo "Instalando Django..."
    pip install -r requirements.txt
else
    echo "Django ya está instalado."
fi

# Realizar migraciones
echo "Realizando migraciones..."
$PYTHON_CMD manage.py makemigrations
$PYTHON_CMD manage.py migrate

# Solicitar el puerto para levantar Django
read -p "Introduce el puerto en el que deseas levantar Django (por defecto 8000): " PUERTO

# Si no se introduce ningún puerto, usar 8000 como valor por defecto
PUERTO=${PUERTO:-8000}

# Levantar Django
echo "Levantando el servidor de Django en el puerto $PUERTO..."
$PYTHON_CMD manage.py runserver "$PUERTO"