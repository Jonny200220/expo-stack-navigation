import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link } from "expo-router";
import { Button } from "@/components/Button";

export default function ThirdScreen() {
  return (
    <View className="justify-center flex-1 p-4 bg-green-200">
      <AppText center size="heading" bold >
          /Third screen
      </AppText>

      <Link href={"/"} push asChild>
        <Button title="Push To Index"/>
      </Link>

      <Link href={"/"} dismissTo push asChild>
        <Button title="dismissTo /"/>
      </Link>

      <Link href={"/second"} replace push asChild>
        <Button title="Replace with /second"/>
      </Link>
      
    </View>

    
  );
}

/**Push:
 *  Index -> /second -> /third -> Index -> /second...
 * 
 * dismissTo: Ya no apila las pantallas.
 *  Index -> /second -> /third -> dismissTo(Index) ...
 *  Index 
 * 
 * 
 * dismissTo: Actua desde el momento en el que lo llamas 
 * es decir que si lo presionas hasta la 10ma pantalla te redirecciona al ultimo index
 * 
 * Index -> /second -> /third -> Index -> /second -> /third -> dismissTo(Index)
 * Index -> /second -> /third -> Index...
 * 
 * 
 * replace: Lo que hace es remplazar la pantalla actual con la que se le pase en el href={""}
 *          entonces lo que sucede es lo siguiente...
 *          Por decirlo asi, se sobre escribe la pantalla que se le pase de referencia
 * 
 * Index -> /second -> /third -> Index -> /second -> /third -> replace(second)
 * Index -> /second -> /third -> Index -> /second -> /second...
 */
