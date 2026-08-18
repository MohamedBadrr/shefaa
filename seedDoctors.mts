import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL!;
const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY!;
const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SECRET_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  },
);

const PASSWORD = "Doctor@123456";

const departments = {
  internalMedicine: "31ec9c6f-39ca-4bd4-a713-b38b0d89afbb",
  cardiology: "5b21b4e4-f127-4601-a853-f1b01e3eb9ed",
  dermatology: "6d025aac-7ab7-4b66-b490-f86a383e48bf",
  orthopedics: "d4d165a2-4d87-409a-b60b-d524fca6af60",
};

const doctors = [
  // =========================================================
  // INTERNAL MEDICINE
  // =========================================================
  {
    firstName: "Nader",
    lastName: "Moky",
    email: "nader.moky@shefaa.test",
    phoneNumber: "+201001000001",
    age: 39,
    address: "Nasr City, Cairo",
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",

    departmentId: departments.internalMedicine,

    degree: "MD, Internal Medicine",
    fee: 450,
    yearsOfExperience: 12,

    description:
      "Internal medicine specialist focused on adult healthcare, preventive medicine, and long-term management of chronic conditions.",

    rating: 4.8,

    schedules: [
      ["Sunday", "10:00"],
      ["Sunday", "11:00"],
      ["Sunday", "12:00"],

      ["Tuesday", "14:00"],
      ["Tuesday", "15:00"],
      ["Tuesday", "16:00"],

      ["Thursday", "17:00"],
      ["Thursday", "18:00"],
      ["Thursday", "19:00"],
    ],
  },

  {
    firstName: "Jasmen",
    lastName: "Nowa",
    email: "jasmen.nowa@shefaa.test",
    phoneNumber: "+201001000002",
    age: 34,
    address: "Heliopolis, Cairo",
    imageUrl: "https://images.pexels.com/photos/6749765/pexels-photo-6749765.jpeg",

    departmentId: departments.internalMedicine,

    degree: "MSc, Internal Medicine",
    fee: 400,
    yearsOfExperience: 9,

    description:
      "Experienced internal medicine physician providing diagnosis, follow-up care, and personalized treatment plans for adults.",

    rating: 4.6,

    schedules: [
      ["Monday", "09:00"],
      ["Monday", "10:00"],
      ["Monday", "11:00"],

      ["Wednesday", "13:00"],
      ["Wednesday", "14:00"],
      ["Wednesday", "15:00"],

      ["Saturday", "18:00"],
      ["Saturday", "19:00"],
      ["Saturday", "20:00"],
    ],
  },

  {
    firstName: "Omar",
    lastName: "Nabil",
    email: "omar.nabil@shefaa.test",
    phoneNumber: "+201001000003",
    age: 42,
    address: "New Cairo, Cairo",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SckXyvgxudlU_pVtfkC_mEYkjZfQSyO-EUMnpTGUyw&s",

    departmentId: departments.internalMedicine,

    degree: "MD, Internal Medicine",
    fee: 500,
    yearsOfExperience: 15,

    description:
      "Consultant in internal medicine with extensive experience in diabetes, hypertension, and general adult medicine.",

    rating: 4.9,

    schedules: [
      ["Sunday", "09:00"],
      ["Sunday", "10:00"],
      ["Sunday", "11:00"],

      ["Wednesday", "16:00"],
      ["Wednesday", "17:00"],
      ["Wednesday", "18:00"],

      ["Friday", "13:00"],
      ["Friday", "14:00"],
      ["Friday", "15:00"],
    ],
  },

  {
    firstName: "Leo",
    lastName: "Adel",
    email: "lana.adel@shefaa.test",
    phoneNumber: "+201001000004",
    age: 31,
    address: "Maadi, Cairo",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqNP03QDX4cGjQXyZHQ_PfTNgFgdLHiVMrec34-TVWw&s",

    departmentId: departments.internalMedicine,

    degree: "MSc, Internal Medicine",
    fee: 350,
    yearsOfExperience: 7,

    description:
      "Internal medicine specialist committed to comprehensive adult care, early diagnosis, and preventive health.",

    rating: 4.5,

    schedules: [
      ["Monday", "12:00"],
      ["Monday", "13:00"],
      ["Monday", "14:00"],

      ["Thursday", "10:00"],
      ["Thursday", "11:00"],
      ["Thursday", "12:00"],

      ["Saturday", "16:00"],
      ["Saturday", "17:00"],
      ["Saturday", "18:00"],
    ],
  },

  // =========================================================
  // CARDIOLOGY
  // =========================================================
  {
    firstName: "Johan",
    lastName: "Morqus",
    email: "johan.morqus@shefaa.test",
    phoneNumber: "+201001000005",
    age: 45,
    address: "Dokki, Giza",
    imageUrl: "https://img.magnific.com/free-photo/doctors-smiling-making-phone-call_23-2147822697.jpg?semt=ais_hybrid&w=740&q=80",

    departmentId: departments.cardiology,

    degree: "MD, Cardiology",
    fee: 700,
    yearsOfExperience: 18,

    description:
      "Cardiology consultant specializing in heart disease prevention, hypertension, and cardiovascular assessment.",

    rating: 4.9,

    schedules: [
      ["Sunday", "13:00"],
      ["Sunday", "14:00"],
      ["Sunday", "15:00"],

      ["Tuesday", "17:00"],
      ["Tuesday", "18:00"],
      ["Tuesday", "19:00"],

      ["Thursday", "10:00"],
      ["Thursday", "11:00"],
      ["Thursday", "12:00"],
    ],
  },

  {
    firstName: "Mohaned",
    lastName: "Hatem",
    email: "maya.hatem@shefaa.test",
    phoneNumber: "+201001000006",
    age: 37,
    address: "Zamalek, Cairo",
    imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20220910/pngtree-young-doctor-adult-male-group-photo-image_9295112.jpg",

    departmentId: departments.cardiology,

    degree: "MSc, Cardiology",
    fee: 600,
    yearsOfExperience: 11,

    description:
      "Cardiologist focused on cardiovascular wellness, arrhythmia evaluation, and long-term cardiac care.",

    rating: 4.7,

    schedules: [
      ["Monday", "10:00"],
      ["Monday", "11:00"],
      ["Monday", "12:00"],

      ["Wednesday", "15:00"],
      ["Wednesday", "16:00"],
      ["Wednesday", "17:00"],

      ["Saturday", "12:00"],
      ["Saturday", "13:00"],
      ["Saturday", "14:00"],
    ],
  },

  {
    firstName: "Youssef",
    lastName: "Rami",
    email: "youssef.rami@shefaa.test",
    phoneNumber: "+201001000007",
    age: 40,
    address: "Sheikh Zayed, Giza",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflGzWl6Kjqjhq0dOVwj3iSlPrbHEHHXRnSYoDsCLlnWsRncaLVcGGgIig&s=10",

    departmentId: departments.cardiology,

    degree: "MD, Cardiovascular Medicine",
    fee: 650,
    yearsOfExperience: 14,

    description:
      "Experienced cardiologist providing advanced evaluation and management of cardiovascular conditions.",

    rating: 4.8,

    schedules: [
      ["Sunday", "16:00"],
      ["Sunday", "17:00"],
      ["Sunday", "18:00"],

      ["Tuesday", "10:00"],
      ["Tuesday", "11:00"],
      ["Tuesday", "12:00"],

      ["Friday", "18:00"],
      ["Friday", "19:00"],
      ["Friday", "20:00"],
    ],
  },

  {
    firstName: "Farah",
    lastName: "Samir",
    email: "farah.samir@shefaa.test",
    phoneNumber: "+201001000008",
    age: 33,
    address: "6th of October, Giza",
    imageUrl: "https://media.istockphoto.com/id/1436148451/photo/smiling-female-doctor-with-digital-tablet-standing-at-isolated-grey-background.jpg?s=612x612&w=0&k=20&c=-cjXiU2FR2B7e6PKi4ELdFRPMiu22aIBkWLSCGzYjYM=",

    departmentId: departments.cardiology,

    degree: "MSc, Cardiology",
    fee: 550,
    yearsOfExperience: 8,

    description:
      "Heart specialist offering patient-centered cardiovascular screening, diagnosis, and follow-up care.",

    rating: 4.6,

    schedules: [
      ["Monday", "14:00"],
      ["Monday", "15:00"],
      ["Monday", "16:00"],

      ["Thursday", "14:00"],
      ["Thursday", "15:00"],
      ["Thursday", "16:00"],

      ["Saturday", "17:00"],
      ["Saturday", "18:00"],
      ["Saturday", "19:00"],
    ],
  },

  // =========================================================
  // DERMATOLOGY
  // =========================================================
  {
    firstName: "Hazem",
    lastName: "Wael",
    email: "hazem.wael@shefaa.test",
    phoneNumber: "+201001000009",
    age: 36,
    address: "Mohandessin, Giza",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/023/273/060/non_2x/portrait-of-a-smiling-male-doctor-with-finger-up-on-white-photo.jpg",

    departmentId: departments.dermatology,

    degree: "MSc, Dermatology",
    fee: 500,
    yearsOfExperience: 10,

    description:
      "Dermatologist experienced in treating skin, hair, and nail conditions with modern evidence-based care.",

    rating: 4.7,

    schedules: [
      ["Sunday", "11:00"],
      ["Sunday", "12:00"],
      ["Sunday", "13:00"],

      ["Wednesday", "18:00"],
      ["Wednesday", "19:00"],
      ["Wednesday", "20:00"],

      ["Saturday", "14:00"],
      ["Saturday", "15:00"],
      ["Saturday", "16:00"],
    ],
  },

  {
    firstName: "Lina",
    lastName: "Khaled",
    email: "lina.khaled@shefaa.test",
    phoneNumber: "+201001000010",
    age: 30,
    address: "New Cairo, Cairo",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gghnfFatHXcnOAcD6PIQMlHKOATqVoJXNHe-uzWsW-kO44K91d2NQLQ&s=10",

    departmentId: departments.dermatology,

    degree: "MSc, Dermatology",
    fee: 450,
    yearsOfExperience: 6,

    description:
      "Dermatology specialist interested in acne treatment, skin health, and personalized dermatological care.",

    rating: 4.5,

    schedules: [
      ["Monday", "09:00"],
      ["Monday", "10:00"],
      ["Monday", "11:00"],

      ["Tuesday", "15:00"],
      ["Tuesday", "16:00"],
      ["Tuesday", "17:00"],

      ["Thursday", "18:00"],
      ["Thursday", "19:00"],
      ["Thursday", "20:00"],
    ],
  },

  {
    firstName: "Adam",
    lastName: "Fouad",
    email: "adam.fouad@shefaa.test",
    phoneNumber: "+201001000011",
    age: 41,
    address: "Heliopolis, Cairo",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SckXyvgxudlU_pVtfkC_mEYkjZfQSyO-EUMnpTGUyw&s",

    departmentId: departments.dermatology,

    degree: "MD, Dermatology",
    fee: 650,
    yearsOfExperience: 16,

    description:
      "Consultant dermatologist with extensive experience in chronic skin disorders and clinical dermatology.",

    rating: 4.9,

    schedules: [
      ["Sunday", "15:00"],
      ["Sunday", "16:00"],
      ["Sunday", "17:00"],

      ["Wednesday", "10:00"],
      ["Wednesday", "11:00"],
      ["Wednesday", "12:00"],

      ["Friday", "16:00"],
      ["Friday", "17:00"],
      ["Friday", "18:00"],
    ],
  },

  {
    firstName: "Nour",
    lastName: "Tarek",
    email: "nour.tarek@shefaa.test",
    phoneNumber: "+201001000012",
    age: 32,
    address: "Maadi, Cairo",
    imageUrl: "https://thumbs.dreamstime.com/b/mature-indian-doctor-portrait-male-medical-uniform-standing-plain-background-shadow-61211616.jpg",

    departmentId: departments.dermatology,

    degree: "MSc, Dermatology",
    fee: 480,
    yearsOfExperience: 8,

    description:
      "Skin care specialist providing diagnosis and treatment for common dermatological and hair conditions.",

    rating: 4.6,

    schedules: [
      ["Tuesday", "09:00"],
      ["Tuesday", "10:00"],
      ["Tuesday", "11:00"],

      ["Thursday", "13:00"],
      ["Thursday", "14:00"],
      ["Thursday", "15:00"],

      ["Saturday", "18:00"],
      ["Saturday", "19:00"],
      ["Saturday", "20:00"],
    ],
  },

  // =========================================================
  // ORTHOPEDICS
  // =========================================================
  {
    firstName: "Karim",
    lastName: "Ziad",
    email: "karim.ziad@shefaa.test",
    phoneNumber: "+201001000013",
    age: 44,
    address: "Nasr City, Cairo",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfuoJMvX_ECK5X1sxfI2v7IEOMhFWb0kyD15Brjh32Zg&s",

    departmentId: departments.orthopedics,

    degree: "MD, Orthopedic Surgery",
    fee: 650,
    yearsOfExperience: 17,

    description:
      "Orthopedic consultant specializing in musculoskeletal conditions, joint disorders, and sports injuries.",

    rating: 4.8,

    schedules: [
      ["Sunday", "10:00"],
      ["Sunday", "11:00"],
      ["Sunday", "12:00"],

      ["Tuesday", "17:00"],
      ["Tuesday", "18:00"],
      ["Tuesday", "19:00"],

      ["Friday", "14:00"],
      ["Friday", "15:00"],
      ["Friday", "16:00"],
    ],
  },

  {
    firstName: "Sara",
    lastName: "Ehab",
    email: "sara.ehab@shefaa.test",
    phoneNumber: "+201001000014",
    age: 35,
    address: "Dokki, Giza",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4xmQtnSObIhIHtXwmu7lmQFw-L5VP4I2WXW0-QW8oCh0m3dFQnXy7fYd&s=10",

    departmentId: departments.orthopedics,

    degree: "MSc, Orthopedics",
    fee: 500,
    yearsOfExperience: 10,

    description:
      "Orthopedic specialist focused on joint pain, mobility problems, rehabilitation, and injury management.",

    rating: 4.6,

    schedules: [
      ["Monday", "11:00"],
      ["Monday", "12:00"],
      ["Monday", "13:00"],

      ["Wednesday", "16:00"],
      ["Wednesday", "17:00"],
      ["Wednesday", "18:00"],

      ["Saturday", "10:00"],
      ["Saturday", "11:00"],
      ["Saturday", "12:00"],
    ],
  },

  {
    firstName: "Malek",
    lastName: "Ayman",
    email: "malek.ayman@shefaa.test",
    phoneNumber: "+201001000015",
    age: 38,
    address: "Sheikh Zayed, Giza",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkRXLMU25KBMGMe18Dm1TqbJXX5RhoCDhqQsmpKAvGSQAbaB-iv36bGw6&s=10",

    departmentId: departments.orthopedics,

    degree: "MD, Orthopedics",
    fee: 600,
    yearsOfExperience: 13,

    description:
      "Orthopedic physician experienced in bone, joint, and sports-related conditions with modern treatment approaches.",

    rating: 4.7,

    schedules: [
      ["Sunday", "14:00"],
      ["Sunday", "15:00"],
      ["Sunday", "16:00"],

      ["Thursday", "09:00"],
      ["Thursday", "10:00"],
      ["Thursday", "11:00"],

      ["Friday", "17:00"],
      ["Friday", "18:00"],
      ["Friday", "19:00"],
    ],
  },

  {
    firstName: "Judy",
    lastName: "Maged",
    email: "judy.maged@shefaa.test",
    phoneNumber: "+201001000016",
    age: 31,
    address: "New Cairo, Cairo",
    imageUrl: "https://static5.depositphotos.com/1037987/476/i/450/depositphotos_4769299-stock-photo-doctor-with-laptop-in-doctors.jpg",

    departmentId: departments.orthopedics,

    degree: "MSc, Orthopedic Medicine",
    fee: 450,
    yearsOfExperience: 7,

    description:
      "Orthopedic specialist providing assessment and treatment for injuries, joint pain, and movement disorders.",

    rating: 4.5,

    schedules: [
      ["Monday", "15:00"],
      ["Monday", "16:00"],
      ["Monday", "17:00"],

      ["Wednesday", "09:00"],
      ["Wednesday", "10:00"],
      ["Wednesday", "11:00"],

      ["Saturday", "15:00"],
      ["Saturday", "16:00"],
      ["Saturday", "17:00"],
    ],
  },
];

async function seedDoctors() {
  console.log("\n   Starting complete Shefaa doctors seed...\n");

  for (const doctor of doctors) {
    console.log(
      `Creating Dr. ${doctor.firstName} ${doctor.lastName}...`,
    );

    // =========================================================
    // 1. CREATE AUTH USER
    // =========================================================
    const {
      data: authData,
      error: authError,
    } = await supabase.auth.admin.createUser({
      email: doctor.email,
      password: PASSWORD,
      email_confirm: true,

      user_metadata: {
        first_name: doctor.firstName,
        last_name: doctor.lastName,
        phone_number: doctor.phoneNumber,
        age: doctor.age,
        address: doctor.address,
        image_url: doctor.imageUrl,

        role: "doctor",

        department_id: doctor.departmentId,
        degree: doctor.degree,
        fee: doctor.fee,
        years_of_experience: doctor.yearsOfExperience,
      },
    });

    if (authError) {
      console.error(
        `   Auth user failed: ${doctor.email}`,
        authError.message,
      );

      continue;
    }

    const doctorId = authData.user.id;

    // =========================================================
    // 2. UPDATE DOCTOR DATA
    // profile + doctor row were already created by DB trigger
    // =========================================================
    const { error: doctorUpdateError } = await supabase
      .from("doctors")
      .update({
        description: doctor.description,

        is_available: true,

        approval_status: "approved",

        manual_rating: doctor.rating,
      })
      .eq("id", doctorId);

    if (doctorUpdateError) {
      console.error(
        `   Doctor update failed: ${doctor.email}`,
        doctorUpdateError.message,
      );

      continue;
    }

    // =========================================================
    // 3. CREATE DOCTOR SCHEDULES
    // =========================================================
    const schedules = doctor.schedules.map(
      ([day, timeSlot]) => ({
        doctor_id: doctorId,
        day,
        time_slot: timeSlot,
        is_active: true,
      }),
    );

    const { error: scheduleError } = await supabase
      .from("doctor_schedules")
      .insert(schedules);

    if (scheduleError) {
      console.error(
        `   Schedules failed: ${doctor.email}`,
        scheduleError.message,
      );

      continue;
    }

    console.log(
      `  Dr. ${doctor.firstName} ${doctor.lastName} created with ${schedules.length} schedules`,
    );
  }

  console.log("\n==========================================");
  console.log("  COMPLETE SEED FINISHED");
  console.log("==========================================");
  console.log(`Doctors: ${doctors.length}`);
  console.log(`Schedules per doctor: 9`);
  console.log(`Total schedules: ${doctors.length * 9}`);
  console.log(`Password for all doctors: ${PASSWORD}`);
  console.log("==========================================\n");
}

seedDoctors().catch((error) => {
  console.error("   Seed crashed:", error);

  process.exit(1);
});