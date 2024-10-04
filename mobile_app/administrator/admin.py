from django.contrib import admin

from administrator.models import Criteria, Exspert, Hack, QRCodeHack, Team


admin.site.register(Hack)
admin.site.register(QRCodeHack)
admin.site.register(Criteria)
admin.site.register(Team)
admin.site.register(Exspert)



# Register your models here.
