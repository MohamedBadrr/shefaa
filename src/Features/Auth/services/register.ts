import { supabase } from "@/lib/supabaseClient";
import type {
  DoctorRegisterFormValues,
  PatientRegisterFormValues,
} from "@/@types";

const getCommonMetadata = (
  values: PatientRegisterFormValues,
  role: "patient" | "doctor",
) => ({
  first_name: values.firstName,
  last_name: values.lastName,
  phone: values.phone,
  age: values.age,
  address: values.address,
  role,
});

export const registerPatient = async (values: PatientRegisterFormValues) => {
  const { data, error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      data: getCommonMetadata(values, "patient"),
    },
  });

  if (error) throw error;
  return data;
};

export const registerDoctor = async (values: DoctorRegisterFormValues) => {
  const { data, error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      data: {
        ...getCommonMetadata(values, "doctor"),
        department_id: values.departmentId,
        degree: values.degree,
        fee: values.fee,
        years_of_experience: values.yearsOfExperience,
        description: values.description,
      },
    },
  });

  if (error) throw error;
  return data;
};
