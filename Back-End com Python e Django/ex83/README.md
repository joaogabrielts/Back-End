# Preparação de ambiente
1. Clone o projeto.
2. Entre na pasta que foi clonada.
3. Crie seu ambiente virtual:
```bash
python -m venv venv
```
4. Ative o ambiente virtual:
```bash
# Linux e Mac:
source venv/bin/activate

# Windows (PowerShell):
.\venv\Scripts\activate

# Windows (GitBash):
source venv/Scripts/activate
```
5. Instale as dependências: 
```bash
pip install -r requirements.txt
```
6. Execute as migrações:
```bash
python manage.py migrate
```