# Instruções:

### Crie o ambiente virtual

```
python -m venv venv
```

### Ative o venv

```bash
# linux e mac:
source venv/bin/activate

# windows (PowerShell):
.\venv\Scripts\activate

# windows (GitBash)
source venv/Scripts/activate
```


### Instale as dependências

```
pip install -r requirements.txt
```

### Execute as migrações

```
python manage.py migrate
```
