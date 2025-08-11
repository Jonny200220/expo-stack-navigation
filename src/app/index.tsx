import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link } from "expo-router";
import { Button } from "@/components/Button";

export default function IndexScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center size="heading" bold >
          Index screen
      </AppText>

      <Link href={"/second"} push asChild>
        <Button title="Push To /Second"/>
      </Link>
      {/* El href no solo acepta strings, tambien acepta objetos,
          Pero los parametros que se le pasen como objetos deben ser
          Objetos serializables, por lo que no se pasan funciones*/}
      <Link href={{
        pathname: "/second",
        params: {name: "Jonny"}
      }}
      push 
      asChild >
        <Button title="Greet Jonny on /second" theme="secondary"/>
      </Link>
    </View>
  );

  /**Al ir apilando => Stack las pantallas, estas van a crear una pila interminable,
   * Ya que como su nombre lo dice almacena las pantallas para despues desapilarlas
   * Para evitar apilar pantallas innecesarias, agregamos la propiedad "dismissTo"
   */
}
