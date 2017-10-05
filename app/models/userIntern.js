import {User} from "user.js"

class UserIntern extends User{
    contructor(user, post, admission_date, shift, is_volunteer, work_days, demission_date, crmv, crmv_uf){
        super(user.user_id, user.code_cpf, user.name, user.surname, user.birthdate, user.sex, user.email, user.password, user.create_time, user.cellphone, user.phone_number, user.image, user.address);
        this.post = post;
        this.admission_date = admission_date;
        this.shift = shift;
        this.is_volunteer = is_volunteer;
        this.work_days = work_days;
        this.demission_date = demission_date;
        this.crmv = crmv;
        this.crmv_uf = crmv_uf;
    }
}