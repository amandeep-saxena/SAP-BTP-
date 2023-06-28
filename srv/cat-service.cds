using addmin from '../db/schema';


service MyService {

    entity invoice as projection on addmin.invoice;
    //entity add as select from addmin.;


    entity readDATA {

        NAME : String;
        CODE : Integer;

    }


    entity writeDATA {

        NAME : String;
        CODE : Integer;

    }

    entity deleteDATA {
        NAME : String;
        CODE : Integer;


    }

    entity updateDATA {

        NAME : String;
        CODE : Integer;
    }

    action addData(data : String) returns {
        Status : Integer
    };
}
